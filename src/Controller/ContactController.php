<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mailer\MailerInterface;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request, MailerInterface $mailer): Response
    {
        $form = $this->createForm(ContactType::class);

        $contact = $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $email = (new TemplatedEmail())
                ->from($contact->get('email')->getData())
                ->to('aaa@aa.a')
                ->subject($contact->get('subject')->getData())
                ->htmlTemplate('contact/email_template.html.twig')
                ->context([
                    'sujet' => $contact->get('subject')->getData(),
                    'mail' => $contact->get('email')->getData(),
                    'message' => $contact->get('message')->getData()
                ]);

                // $mailer->send($email);

                // add flash
                $this->addFlash('notice', 'Votre email à envoyé avec succès !');
                return $this->redirectToRoute('app_contact');

        }
        return $this->render('contact/contact.html.twig',[
            'form' => $form->createView()
        ]);
    }
}

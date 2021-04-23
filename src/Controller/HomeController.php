<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function home(): Response
    {
        return $this->render('home/home.html.twig');
    }

    #[Route('/en-construction', name: 'app_attente')]
    public function home2(): Response
    {
        return $this->render('home/attente.html.twig');
    }

}

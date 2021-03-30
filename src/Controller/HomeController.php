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
    #[Route('/home2', name: 'app_home2')]
    public function home2(): Response
    {
        return $this->render('home/home2.html.twig');
    }
    #[Route('/home3', name: 'app_home3')]
    public function home3(): Response
    {
        return $this->render('home/home3.html.twig');
    }
}

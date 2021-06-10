<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, [
                'label' => 'Votre email',
                'attr' => [
                    'class' => 'form-control',
                    'id' => 'floatingInput',
                    'placeholder' => 'name@example.com'
                ]
            ])
            ->add('subject', ChoiceType::class,[
                'placeholder' => '-Chosisez un sujet-',
                'choices' => [
                    'Premier contact' => 'Mon premier rendez-vous',
                    'Plus d\'infos' => 'Ma première question',
                    'Contact professionnel' => 'Mes autres demandes',
                ],
                'expanded' => false,
                'multiple' => false,
                'attr' => [
                    'class' => 'form-control',
                    
                ]
            ])
            ->add('message', TextareaType::class, [
                'label' => 'Votre message',
                'attr' => [
                    'class' => 'form-control ta-message',
                    'id' => 'floatingTextarea',
                    'placeholder' => 'Laissez un commentaire'

                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}

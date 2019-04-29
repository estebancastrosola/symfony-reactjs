<?php

namespace AppBundle\Entity;
use KnpU\LoremIpsumBundle\KnpUIpsum;
use KnpU\LoremIpsumBundle\KnpUWordProvider;

/**
 * Class Article
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="AppBundle\Entity\Repository\ArticleRepository")
 */
class Article
{
    private $id;

    private $name;

    private $description;

    private $img;

    /**
     * Article constructor.
     *
     * @param $id
     * @param $name
     * @param $img
     */
    public function __construct($id, $name, $img)
    {
        $knpUIpsum = new KnpUIpsum([new KnpUWordProvider()]);
        $this->id = $id;
        $this->name = $name;
        $this->description = $knpUIpsum->getWords(10);
        $this->img = $img;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return mixed
     */
    public function getImg()
    {
        return $this->img;
    }
}
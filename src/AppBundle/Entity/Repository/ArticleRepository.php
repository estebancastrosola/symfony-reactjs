<?php

namespace AppBundle\Entity\Repository;

/**
 * Interface ArticleRepository
 *
 * @package AppBundle\Entity\Repository
 */
interface ArticleRepository
{
    /**
     * @return mixed
     */
    public function findAll();
}
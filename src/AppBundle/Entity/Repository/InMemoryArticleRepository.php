<?php


namespace AppBundle\Entity\Repository;

use AppBundle\Entity\Article;

/**
 * Class InMemoryArticleRepository
 *
 * @package AppBundle\Entity\Repository
 */
class InMemoryArticleRepository implements ArticleRepository
{

    /**
     * @return mixed
     */
    public function findAll()
    {
        $articles = array();

        foreach (range(1, 10) as $articleNumber) {
            $articles[] = new Article(
                $articleNumber,
                sprintf(
                    'article_%s',
                    $articleNumber
                ),
                'https://picsum.photos/500/500'
            );
        }

        return $articles;
    }
}
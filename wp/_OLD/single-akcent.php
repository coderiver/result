<?php get_header(); ?>


<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<!-- begin page-content -->
<div class="page-content">
  <div class="l">

    <header class="article article-head" <?php post_class() ?> id="post-<?php the_ID(); ?>">
      <h1 class="title-thin"><?php the_title(); ?></h1>
      <p class="article__date"><?php echo get_the_date('H:i',$recent["ID"]).' '.get_the_date('d.m.Y',$recent["ID"]).'</span>'; ?></p>
      <p>
        <?php the_field('lead'); ?>
      </p>

      <div class="share share_vert">
        <a href="#" class="share-btn icon icon-facebook"></a>
        <a href="#" class="share-btn icon icon-twitter"></a>
      </div>
    </header>

    <div class="l-article">
      <aside class="l-article__aside article-aside">
        <h4 class="title title_xm"><a href='/news'><?php echo __('<!--:ru-->Новости<!--:--><!--:ua-->Новини<!--:-->');?></a></h4>
        <h4 class="title title_xm"><a href='/akcents'><?php echo __('<!--:ru-->Акценты<!--:--><!--:ua-->Акценти<!--:-->');?></a></h4>
      </aside>

      <article class="l-article__content article">
        <?php the_content(); ?>

        <div class="article__source">
          <?php the_field('source'); ?>
        </div>
        
        <div class="share ">
          <a href="#" class="share-btn icon icon-facebook"></a>
          <a href="#" class="share-btn icon icon-twitter"></a>
        </div>

      </article>
    </div>

    <h4 class="title-thin"><?php echo __('<!--:ru-->Читайте также<!--:--><!--:ua-->Читайте також<!--:-->');?></h4>
    <ul class="news-list">
          <?php 
          $th = $post->ID;
          $args_fp = array(
            'post__not_in' => array($th),
            'posts_per_page' => 3,
            'post_type' => 'akcent'
          );
          $queryObject = new WP_Query( $args_fp );
          // print_r($queryObject);
          // The Loop!
          if ($queryObject->have_posts()) {

            
            while ($queryObject->have_posts()) {
              $queryObject->the_post();
              $image = get_field('image');

              echo '<li class="news-list__item">';
              echo '<a href="'.get_permalink().'" class="news">';

              echo ' <div class="news__pic" style="background-image:url('.$image['url'].')">';
              // echo '   <img src="'.$image['url'].'" alt="">';
              echo ' </div>';
              echo ' <div class="news__content">';
              echo '   <p class="news__text">'.get_the_title().' <span class="news__date">'.get_the_date('d.m.Y',$post->ID).'</span></p>';
              echo '   <i class="news__arrow icon icon-arrow-right"></i>';
              echo ' </div>';

              echo '</a>';
              echo '</li>';
            }

          }
          ?>
    </ul>

  </div>
</div>
<!-- end pagecontent -->

<?php endwhile; endif; ?>

<?php get_footer(); ?>

<?php get_header(); ?>


<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <div class="page-content">
    <div class="l">

      <header class="content-header" style="display:none">
        <div class="content-header__left">
          <h3 class="title title_link is-active">
            <a href="/news"><?php echo __('<!--:ru-->Новости<!--:--><!--:ua-->Новини<!--:-->');?></a>
          </h3>
          <h3 class="title title_link">
            <a href="/highlights"><?php echo __('<!--:ru-->Акценты<!--:--><!--:ua-->Акценти<!--:-->');?></a>
          </h3>
        </div>
        <div class="content-header__right">
          <!-- <div class="dropdown dropdown_right">
            <span class="badge">Усі типи <i class="icon icon-chevron-down"></i></span>
            <ul class="dropdown__list">
              <li>Усі типи</li>
              <li>тип 1</li>
              <li>тип 2</li>
            </ul>
          </div> -->
         
        </div>
      </header>

      <div class="l-news-page">

        <div class="l-news-page__left" data-scroller>
          <ul class="list">

            <?php
              $th = $post->ID;
                $args = array( 'numberposts' => '50' );
                $recent_posts = wp_get_recent_posts( $args );

                foreach( $recent_posts as $recent ){
                  $class = '';
                  if($th==$recent["ID"]){$class=" is-active";}
                  echo '<li class="list__item">';
                    echo '<a href="' . get_permalink($recent["ID"]) . '" class="event '.$class.'">';
                    echo '  <span class="event__left">';
                    echo '  <span class="event__time">'.get_the_date('H:i',$recent["ID"]).'</span>';
                    echo '  <span class="event__date">'.get_the_date('d.m.Y',$recent["ID"]).'</span>';
                    echo '  </span>';
                    echo '  <span class="event__text">'.$recent["post_title"].'</span>';
                    echo '</a>';
                    echo '</li>';
                }
            ?>

          </ul>
        </div>

        <div class="l-news-page__right">
          <!-- <hr class="divider"> -->
          <article class="article" <?php post_class() ?> id="post-<?php the_ID(); ?>">
            <h3 class="article__title">
              <?php the_title(); ?>
            </h3>
            <?php the_content(); ?>
          </article>

          <div class="share">
            <a href="#" onclick="Share.facebook('<?php echo get_permalink(); ?>','<?php echo get_the_title(); ?>', 'http://manapoints.com/wp-content/uploads/2016/02/police-logo.png');return false;" class="share-btn icon icon-facebook"></a>
            <a href="#" onclick="Share.twitter('<?php echo get_permalink(); ?>','<?php echo get_the_title(); ?>');return false;" class="share-btn icon icon-twitter"></a>
          </div>
        </div>

      </div>
    </div>
  </div>


<?php endwhile; endif; ?>

<?php get_footer(); ?>

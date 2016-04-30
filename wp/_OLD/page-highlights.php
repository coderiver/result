<?php get_header(); ?>


<div class="page-content">
  <div class="l">

    <header class="content-header" style="display:none">
      <div class="content-header__left">
        <h3 class="title title_link">
          <a href="/news"><?php echo __('<!--:ru-->Новости<!--:--><!--:ua-->Новини<!--:-->');?></a>
        </h3>
        <h3 class="title title_link is-active">
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

    <ul class="news-list">
      <?php 
      $args_fp = array(
        'posts_per_page' => 15,
        'post_type' => 'highlight'
      );
      $queryObject = new WP_Query( $args_fp );
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

   <!--  <div class="align-center">
      <a href="/" class="btn btn_md"><span class="btn__text"><?php echo __('<!--:ru-->Загрузить еще<!--:--><!--:ua-->Завантажити ще<!--:-->');?></span></a>
    </div> -->

  </div>
</div>

<?php get_footer(); ?>

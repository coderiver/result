<?php 
$term = $wp_query->queried_object;
$slug_title = $term->slug;
?>

<!-- BEGIN toparea -->
<div class="toparea">
  <div class="toparea-gallery gs">
    <?php 
    $args_fp = array(
      'posts_per_page' => -1,
      'post_type' => 'items',
      $term->taxonomy => $term->slug
    );
    $queryObject = new WP_Query( $args_fp );
    // The Loop!
    if ($queryObject->have_posts()) {

      while ($queryObject->have_posts()) {
        $queryObject->the_post();
        $image = get_field('foto');
        // print_r($image);
        $image = $image[sizes][large];
        echo '<div class="gs-slide" style="background-image: url('.$image.')"></div>';
      }

    }
    ?>

  </div>
  <div class="l">
    <a href="catalog.html" class="toparea__nav-btn btn btn_sm"><span>назад в каталог</span></a>
    <h1 class="toparea__title"><? echo get_the_title($term->term_id);?></h1>
    <strong class="toparea__small-subtitle">декор покрытия</strong>
    <h3 class="toparea__subtitle">
    <!-- Дуб французский -->
    </h3>

    <div class="toparea__footer">
      <div class="l-center">
        <span class="group-title">декоры покрытия</span>

        <div class="select-buttons-group">
          <?
            if ($queryObject->have_posts()) {
              $i = 0;
              while ($queryObject->have_posts()) {
                $queryObject->the_post();
                $i++;
                if($i==1){$cl = 'is-selected';}else{$cl = '';}
                echo '<a class="btn btn_select '.$cl.'" href="#"><span>'.get_the_title().'</span></a>';
              }
            }
            // wp_reset_query();
          ?>

        </div>
      </div>
    </div>
  </div>
</div>
<!-- END toparea -->

<?
  $previews = '';
  if ($queryObject->have_posts()) {
    $i = 0;
    while ($queryObject->have_posts()) {
      $queryObject->the_post();
      $image = get_field('foto_zoomable');
      $image1 = $image[sizes][large];
      $image2 = $image[sizes][medium_large];
      
                 $previews .= '<a class="preview js-fancy" href="'.$image1.'">
                        <span class="preview__icon"><svg class="icon icon-loupe">
        <use xlink:href="'.get_bloginfo('template_directory').'/img/sprite.svg#icon-loupe"></use></svg></span><img src="'.$image2.'"></a>';
      
    }
  }
  wp_reset_query();
?>

<?php 
    query_posts(array( 
        'post_type' => 'collection',
        'p' => $term->term_id
    ) );  
?>
<?php while (have_posts()) : the_post(); ?>



  <div class="l-center">
        <div class="clearfix">
          <div class="l-catalog-item-main">

            <div class="l-col-620 text">
              <? the_content();?>

              <div class="features-block">
                <div class="features-group">
                  <span class="js-tooltip" title="Экологически чистый"><svg class="icon icon-leaflet">
  <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-leaflet"></use>
</svg>
</span>
                  <span class="js-tooltip" title="Экологически чистый"><svg class="icon icon-e1">
  <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-e1"></use>
</svg>
</span>
                  <span class="js-tooltip" title="Экологически чистый"><svg class="icon icon-mop">
  <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-mop"></use>
</svg>
</span>
                  <span class="js-tooltip" title="Экологически чистый"><svg class="icon icon-cigarette">
  <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-cigarette"></use>
</svg>
</span>
                  <span class="js-tooltip" title="Экологически чистый"><svg class="icon icon-wineglass">
  <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-wineglass"></use>
</svg>
</span>
                  <span class="js-tooltip" title="Экологически чистый"><svg class="icon icon-temp">
  <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-temp"></use>
</svg>
</span>
                  <span class="js-tooltip" title="Экологически чистый"><svg class="icon icon-lock">
  <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-lock"></use>
</svg>
</span>
                  <span class="js-tooltip" title="Экологически чистый"><svg class="icon icon-labuten">
  <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-labuten"></use>
</svg>
</span>
                </div>
                <? echo $previews;?>
                
              </div>

              <table class="table table_features">
                <caption class="table__caption">Характеристики</caption>
                <tbody>
              <!--     <tr>
                    <td><em class="table__label">Тон дерева</em> Светлый</td>
                    <td><em class="table__label">Декор</em> Дуб</td>
                  </tr> -->
                  <tr>
                    <td><em class="table__label">Площадь в упаковке</em> <? the_field('ploshad');?></td>
                    <td><em class="table__label">Толщина</em> <? the_field('thickness');?>мм</td>
                  </tr>
                  <tr>
                    <td><em class="table__label">Планок в упаковке</em> <? the_field('planok');?> шт</td>
                    <td><em class="table__label">Вес упаковок</em> <? the_field('weight');?></td>
                  </tr>
                  <tr>
                    <td><em class="table__label">Формат планки</em> <? the_field('format');?></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>

              <table class="table table_features">
                <caption class="table__caption">Нормы отгрузки</caption>
                <tbody>
                  <tr>
                    <td>22 палетт</td>
                    <td>2783,404 м²</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
<?php endwhile;?>
      <div class="l-catalog-item-aside">
        <?php get_template_part( 'partials/calculator' ); ?>
      </div>
    </div>
  </div>


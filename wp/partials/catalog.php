<!-- BEGIN catalog -->
<section class="section l">
  <div class="section-header">
    <h1 class="h1 uppercase">Продукция</h1>
  </div>

  <div class="section-filters">
    <div class="section-filters__cell">
      <div class="select">
        <button class="select__button uppercase spacing-100">Ламинат.</button>
        <div class="select__button-overlay"></div>
        <ul class="select__list">
          <li class="select__item" data-value="laminat_1">Laminat 1</li>
          <li class="select__item" data-value="laminat_2">Laminat 2 Laminat 2 Laminat 2 Laminat 2</li>
          <li class="select__item" data-value="laminat_3">Laminat 3</li>
        </ul>
      </div>
    </div>

    <div class="section-filters__cell">
      <div class="select">
        <button class="select__button">любой декор</button>
        <div class="select__button-overlay"></div>
        <ul class="select__list">
          <li class="select__item" data-value="laminat_1">Laminat 1</li>
          <li class="select__item" data-value="laminat_2">Laminat 2 Laminat 2 Laminat 2 Laminat 2</li>
          <li class="select__item" data-value="laminat_3">Laminat 3</li>
        </ul>
      </div>
    </div>

    <div class="section-filters__cell">
      <div class="radio-group">
        <label class="radio-select">
          <input type="radio" name="class" value="32" checked>
          <span>32 класс</span>
        </label>
        <label class="radio-select">
          <input type="radio" name="class" value="33">
          <span>33 класс</span>
        </label>
      </div>
    </div>
  </div>

  <div class="clearfix">
    <?$queryObject = new WP_Query( 'post_type=collection&posts_per_page=-1&order=ASC&orderby=menu_order' );
// The Loop!
if ($queryObject->have_posts()) {

  
  while ($queryObject->have_posts()) {
    $queryObject->the_post();
    $image = get_field('photo');
    $image = $image[sizes][medium_large];
    $mat = get_field('material');
    $tile = get_field('tile');
    $terms = get_the_terms( $post->ID , 'class' );
    // print_r($image);
    ?>
    <a href="<? echo get_permalink();?>" class="tile tile_<? echo $tile;?>" style="background-image: url('<? echo $image;?>')">
      <div class="tile__inner">
        <strong class="tile__title"><? the_title();?></strong>
        <span class="tile__subtitle"><? echo $mat;?></span>
        <span class="tile__number">2</span>
        <span class="tile__info"><? echo $terms[0]->name;?></span>
      </div>
    </a>


<?  }

}
?>





    <!-- <a href="/item/" class="tile" style="background-image: url('<?php bloginfo('template_directory'); ?>/img/tile-1.jpg')">
      <div class="tile__inner">
        <strong class="tile__title">Elegant</strong>
        <span class="tile__subtitle">дуб</span>
        <span class="tile__number">2</span>
        <span class="tile__info">32 класс (АС4)</span>
      </div>
    </a>

    <a href="/item/" class="tile" style="background-image: url('<?php bloginfo('template_directory'); ?>/img/tile-2.jpg')">
      <div class="tile__inner">
        <strong class="tile__title">Legna</strong>
        <span class="tile__subtitle">дуб</span>
        <span class="tile__number">5</span>
        <span class="tile__info">32 класс (АС4)</span>
      </div>
    </a>

    <a href="/item/" class="tile tile_2x2 tile_pull-right" style="background-image: url('<?php bloginfo('template_directory'); ?>/img/tile-3.jpg')">
      <div class="tile__inner">
        <strong class="tile__title">Premium</strong>
        <span class="tile__subtitle">дуб, монтана</span>
        <span class="tile__number">6</span>
        <span class="tile__info">32 класс (АС4)</span>
      </div>
    </a>

    <a href="/item/" class="tile" style="background-image: url('<?php bloginfo('template_directory'); ?>/img/tile-4.jpg')">
      <div class="tile__inner">
        <strong class="tile__title">Floor</strong>
        <span class="tile__subtitle">дуб, афцелия</span>
        <span class="tile__number">10</span>
        <span class="tile__info">32 класс (АС4)</span>
      </div>
    </a>

    <a href="/item/" class="tile" style="background-image: url('<?php bloginfo('template_directory'); ?>/img/tile-3.jpg')">
      <div class="tile__inner">
        <strong class="tile__title">Diamond</strong>
        <span class="tile__subtitle">дуб</span>
        <span class="tile__number">7</span>
        <span class="tile__info">32 класс (АС4)</span>
      </div>
    </a>

    <a href="/item/" class="tile tile_2x2" style="background-image: url('<?php bloginfo('template_directory'); ?>/img/tile-5.jpg')">
      <div class="tile__inner">
        <strong class="tile__title">Grand</strong>
        <span class="tile__subtitle">дуб, монтана</span>
        <span class="tile__number">6</span>
        <span class="tile__info">32 класс (АС4)</span>
      </div>
    </a> -->
  </div>
</section>
<!-- END catalog -->

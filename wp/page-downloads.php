<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Rezult
 * @since Rezult 1.0
 */
 
get_header(); ?>


<div class="out">

  <section class="section l">
    <div class="l-center">
      <h1 class="h1 uppercase align-center title-margin">Раздаточные материалы</h1>
      <h2 class="h4">
        Качество REZULT базируется на семи основных принципах.
        <br>Благодаря этим жестким стандартам, REZULT довел качество
        ламината&nbsp;до&nbsp;совершенства.
      </h2>
    </div>

    <div class="tiles-group">
      <a href="#" class="tile tile_simple">
        <div class="tile__inner">
          <strong class="tile__title">Ламинат<br>Elegant <br>33 класс AC5</strong>
          <span class="tile__subtitle">скачать каталог</span>
          <span class="tile__badge">PDF</span>
          <span class="tile__info">20.11.2015</span>
        </div>
      </a>

      <a href="#" class="tile tile_simple">
        <div class="tile__inner">
          <strong class="tile__title">Ламинат <br>Legna <br>32 класс АС4</strong>
          <span class="tile__subtitle">скачать каталог</span>
          <span class="tile__badge">PDF</span>
          <span class="tile__info">20.11.2015</span>
        </div>
      </a>

      <a href="#" class="tile tile_simple">
        <div class="tile__inner">
          <strong class="tile__title">Ламинат<br> Floor<br>33 класс AC4</strong>
          <span class="tile__subtitle">скачать каталог</span>
          <span class="tile__badge">PDF</span>
          <span class="tile__info">20.11.2015</span>
        </div>
      </a>

      <div class="tile tile_simple tile_static" style="background-image: url('<?php bloginfo('template_directory'); ?>/img/tile-4.jpg')"></div>

      <div class="tile  tile_2x2 tile_simple tile_static" style="background-image: url('<?php bloginfo('template_directory'); ?>/img/tile-1.jpg')"></div>

      <a href="#" class="tile tile_simple">
        <div class="tile__inner">
          <strong class="tile__title">МДФ<br> Ламинированная</strong>
          <span class="tile__subtitle">скачать каталог</span>
          <span class="tile__badge">PDF</span>
          <span class="tile__info">18.11.2015</span>
        </div>
      </a>

      <a href="#" class="tile tile_simple">
        <div class="tile__inner">
          <strong class="tile__title">МДФ <br>все виды</strong>
          <span class="tile__subtitle">скачать каталог</span>
          <span class="tile__badge">PDF</span>
          <span class="tile__info">18.11.2015</span>
        </div>
      </a>

      <a href="#" class="tile tile_simple">
        <div class="tile__inner">
          <strong class="tile__title">МДФ <br>Шлифованная</strong>
          <span class="tile__subtitle">скачать каталог</span>
          <span class="tile__badge">PDF</span>
          <span class="tile__info">18.11.2015</span>
        </div>
      </a>

      <a href="#" class="tile tile_simple">
        <div class="tile__inner">
          <strong class="tile__title">МДФ <br>все виды</strong>
          <span class="tile__subtitle">скачать каталог</span>
          <span class="tile__badge">PDF</span>
          <span class="tile__info">18.11.2015</span>
        </div>
      </a>

      <a href="#" class="tile tile_simple">
        <div class="tile__inner">
          <strong class="tile__title">Ламинат <br>Elegant <br>33 класс AC5</strong>
          <span class="tile__subtitle">скачать каталог</span>
          <span class="tile__badge">PDF</span>
          <span class="tile__info">20.11.2015</span>
        </div>
      </a>

      <a href="#" class="tile tile_simple">
        <div class="tile__inner">
          <strong class="tile__title">Ламинат <br>Все виды</strong>
          <span class="tile__subtitle">скачать каталог</span>
          <span class="tile__badge">PDF</span>
          <span class="tile__info">20.11.2015</span>
        </div>
      </a>

      <div class="tile  tile_2x1 tile_simple tile_static" style="background-image: url('<?php bloginfo('template_directory'); ?>/img/tile-3.jpg')"></div>
    </div>
  </section>

</div>
   
    


<?php get_template_part( 'partials/footer-links' ); ?> 
<?php get_footer(); ?>
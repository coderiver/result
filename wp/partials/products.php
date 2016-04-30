<!-- BEGIN products -->
<style>
  .tile__title{
    font-size: 25px;
  }
</style>
<section class="products l">
  <div class="section-header">
    <h2 class="h1 uppercase">Продукция</h2>
    <div class="section-header__subtitle">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis iste fuga fugit maxime quas, earum nemo, rerum? Debitis error nemo, asperiores, quo perspiciatis, porro ipsam at quaerat similique neque quas.
    </div>
  </div>
  <div class="clearfix">

      <?
      $queryObject = new WP_Query(array(
      'post_type'      => 'page',
      'post_parent'       => 78,                               
      'order'             => 'ASC',
      'orderby'           => 'menu_order',
      'posts_per_page'    => -1

  ));
  if ($queryObject->have_posts()) {

    
    while ($queryObject->have_posts()) {
      $queryObject->the_post();
      $image = get_field('catalogfoto');
      $image = $image[sizes][medium_large];
      ?>
      <a href="<? echo get_permalink();?>" class="tile tile_small tile_<? echo $tile;?>" style="background-image: url('<? echo $image;?>')">
        <div class="tile__inner">
          <strong class="tile__title"><? the_title();?></strong>
        </div>
      </a>


  <?  }

  }
  ?>

  <?
      $queryObject = new WP_Query(array(
      'post_type'      => 'page',
      'post_parent'       => 80,                               
      'order'             => 'ASC',
      'orderby'           => 'menu_order',
      'posts_per_page'    => -1

  ));
  if ($queryObject->have_posts()) {

    
    while ($queryObject->have_posts()) {
      $queryObject->the_post();
      $image = get_field('catalogfoto');
      $image = $image[sizes][medium_large];
      ?>
      <a href="<? echo get_permalink();?>" class="tile tile_small tile_<? echo $tile;?>" style="background-image: url('<? echo $image;?>')">
        <div class="tile__inner">
          <strong class="tile__title"><? the_title();?></strong>
        </div>
      </a>


  <?  }

  }
  ?>
    

    
  </div>
  <div class="products__footer">
    <a style="visibility:hidden" href="#" class="btn btn_lg"><span>Все коллекции</span></a>
  </div>
</section>
<!-- END products -->

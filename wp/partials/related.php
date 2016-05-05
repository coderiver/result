<section class="section l related section_spaced">
    <div class="section-header">
      <h3 class="h4 uppercase spacing-100">Другие коллекции

      <?
$term = $wp_query->queried_object;
$slug_title = $term->slug;
// print_r($term->ID);
    ?></h3>
    </div>

    <div class="clearfix">
  <?
      $term = $wp_query->queried_object;
      $act =  $term->ID;
      // echo $act;

      $my_query = new WP_Query(array(
          'post__not_in' => array($act),
          'post_type' => 'collection',
          'posts_per_page'=> 4,
          'order'=> ASC,
          'orderby'=> menu_order
      ));

      if ( $my_query->have_posts() ) {
      while ($my_query->have_posts()) { 
        $my_query->the_post(); 

          $image = get_field('photo');
          $image = $image[sizes][medium_large];
          $mat = get_field('material');
          $tile = get_field('tile');
          $terms = get_the_terms( $post->ID , 'class' );
          ?>
          <a href="<? echo get_permalink();?>" class="tile tile_small" style="background-image: url('<? echo $image;?>')">
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

    </div>
  </section>
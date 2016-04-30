<section class="section l related" style="margin-bottom:40px">
    <div class="section-header">
      <h3 class="h4 uppercase spacing-100">Другие коллекции</h3>
    </div>

    <div class="clearfix">
  <?
      $term = $wp_query->queried_object;
      $act =  $term->term_id;

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
          $mat = get_field('material');
          $tile = get_field('tile');
          $terms = get_the_terms( $post->ID , 'class' );
          ?>
          <a href="<? echo get_permalink();?>" class="tile" style="background-image: url('<? echo $image;?>')">
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
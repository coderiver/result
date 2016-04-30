<?php
/**
 * Template Name: Project page
 *
 * @package WordPress
 * @subpackage Police
 * @since Police 1.0
 */
get_header(); ?>

<?php
// $args_fp = array(
//   'posts_per_page' => 1
// );
// $queryObject = new WP_Query( $args_fp );
// // The Loop!
// if ($queryObject->have_posts()) {

  
//   while ($queryObject->have_posts()) {
//     $queryObject->the_post();

// <?php 
while ( have_posts() ) : the_post(); 
  $currentID = $post->ID;
  $currentTITLE = get_the_title();
  $currentcontent = get_the_content();
  $currentcontent = apply_filters( 'the_content', $currentcontent );
  $currentcontent = str_replace( ']]>', ']]&gt;', $currentcontent );
endwhile; 
if(is_page('project')){
   $args = array(
      'numberposts' => 1,
      'post_type' => 'project' );

      $recent_posts = wp_get_recent_posts( $args, ARRAY_A );
      $currentID = $recent_posts[0][ID];
      $currentTITLE = $recent_posts[0][post_title];
      $currentcontent = $recent_posts[0][post_content];
}
?>


  <div class="page-content">
    <div class="l">

      <div class="l-news-page">

        <div class="l-news-page__left" data-scroller>
          <ul class="list">

            <?php
                // $args = array( 'numberposts' => '50' );
                // $recent_posts = wp_get_recent_posts( $args );
                $queryObject = new WP_Query( 'post_type=project&posts_per_page=50' );

                while ($queryObject->have_posts()) {
                  $queryObject->the_post();
                  $class = '';
                  if($currentID==$post->ID){$class=" is-active";}
                  echo '<li class="list__item">';
                  echo '<a href="'.get_permalink().'" class="q '.$class.'">';
                  echo '  <div class="q__content">'.get_the_title().'</div>';
                  echo '</a>';
                  echo '</li>';
                }
            ?>

          </ul>
        </div>

        <div class="l-news-page__right">
          <article class="article"  >
            <h3 class="article__title">
              <?php 
              echo $currentTITLE; ?>
            </h3>
            <?php 
            echo $currentcontent; ?>
          </article>

          
        </div>

      </div>
    </div>
  </div>



<?php get_footer(); ?>

<?php
$args=array(
  'post_type' => 'subslider',
  // 'post_status' => 'publish',
  'posts_per_page' => -1,
  'caller_get_posts'=> 1);

$my_query = null;
$my_query = new WP_Query($args);
$i = 0;

if( $my_query->have_posts() ) {
  while ($my_query->have_posts()) : $my_query->the_post(); 
    $arr[$i]['foto'] = get_field('foto')['sizes']['large'];
    $arr[$i]['title'] = get_the_title();
    $arr[$i]['subtitle'] = get_field('subtitle');
    $arr[$i]['text'] = get_the_content();
    $i++;
  endwhile;
}
wp_reset_query();  // Restore global post data stomped by the_post().
?>

<!-- BEGIN gallery -->
<div class="gallery">
  <div class="gallery__left">
    <div class="gs">
      <?
      foreach ($arr as &$value) {
          echo '<div class="gs-slide" style="background-image: url('.$value['foto'].')"></div>';
      }
      ?>
    </div>
  </div>
  <div class="gallery__right">
    <?
      foreach ($arr as &$value) { ?>
          <div class="gallery__text">
            <h2 class="h2"><? echo $value['title'];?></h2>
            <strong><? echo $value['subtitle'];?></strong>
            <p><? echo $value['text'];?></p>
          </div>
     <? }
    ?>
  </div>
</div>
<!-- END gallery -->

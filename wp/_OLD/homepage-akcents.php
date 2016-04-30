<ul class="list list_main-news">
<?php 
// $queryObject = new WP_Query( 'posts_per_page=5' );
$queryObject = new WP_Query( 'post_type=highlight&posts_per_page=3' );
// The Loop!
if ($queryObject->have_posts()) {

	
	while ($queryObject->have_posts()) {
		$queryObject->the_post();
		$image = get_field('image');

		echo '<li class="list__item">';
		echo '<a href="'.get_permalink().'" class="news news_horz">';

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
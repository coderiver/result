<ul class="list list_main-events">
<?php
    $args = array( 'numberposts' => '5' );
    $recent_posts = wp_get_recent_posts( $args );

    foreach( $recent_posts as $recent ){
    	echo '<li class="list__item">';
        echo '<a href="' . get_permalink($recent["ID"]) . '" class="event">';
        echo '	<span class="event__left">';
        echo '	<span class="event__time">'.get_the_date('H:i',$recent["ID"]).'</span>';
        echo '  <span class="event__date">'.get_the_date('d.m.Y',$recent["ID"]).'</span>';
        echo '  </span>';
        echo '	<span class="event__text">'.$recent["post_title"].'</span>';
        echo '</a>';
        echo '</li>';
    }
?>
</ul>


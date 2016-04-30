<header class="content-header">
  <div class="content-header__left">
    <?php $defaults = array(
        'theme_location'  => '',
        'menu'            => '',
        'container'       => 'false',
        'container_class' => 'menu-{menu slug}-container',
        'container_id'    => '',
        'menu_class'      => 'menu',
        'menu_id'         => '',
        'echo'            => false,
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '<h3 class="title title_link">',
        'after'           => '</h3>',
        'link_before'     => '',
        'link_after'      => '',
    );
    ?>
      <?php 
      // echo strip_tags(wp_nav_menu( $defaults ), '<a><h3>' );
echo wp_nav_menu( $defaults );
      ?>
  </div>
</header>
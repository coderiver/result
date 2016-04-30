<!-- BEGIN header -->
<header class="header">
  <div class="header__logo">
    <a href="/" class="main-logo main-logo_adaptive main-logo_beta"></a>
  </div>

  <div class="header__content">

    <div class="header__phones">
      <a href="tel:102" class="header-call">
        <span class="header-call__text"><?php echo __('<!--:ru-->Вызов патруля<!--:--><!--:ua-->Виклик патруля<!--:-->');?></span>
        <span class="header-call__number">
          <i class="icon icon-phone"></i>
          102
        </span>
      </a>

      <a href="tel:0442549488" class="header-call">
        <span class="header-call__text"><?php echo __('<!--:ru-->Горячая линия<!--:--><!--:ua-->Гаряча лінія<!--:-->');?></span>
        <span class="header-call__number">
          <i class="icon icon-phone"></i>
          (044) 254-94-88
        </span>
      </a>
      <a href="/contacts" class="header-others"><?php // echo __('<!--:ru-->Другие контакты<!--:--><!--:ua-->Інші контакти<!--:-->');?></a>
    </div>

    <div class="header__menu">
      <nav class="main-menu">
        
        <!-- <a class="main-menu__link <?php if(is_home()) echo 'is-active';?>" href="/">Головна</a> -->
        <a class="main-menu__link <?php if(is_page('news') || is_singular( 'post' )) echo 'is-active';?>" href="/news"><?php echo __('<!--:ru-->Новости<!--:--><!--:ua-->Новини<!--:-->');?></a>
        
        <a class="main-menu__link <?php if(is_page('highlights') || is_singular( 'highlight' )) echo 'is-active';?>" href="/highlights"><?php echo __('<!--:ru-->Акценты<!--:--><!--:ua-->Акценти<!--:-->');?></a> 

        <a class="main-menu__link <?php if(is_page('projects') || is_singular( 'project' )) echo 'is-active';?>" href="/projects"><?php echo __('<!--:ru-->Полиция и общество<!--:--><!--:ua-->Поліція і громада<!--:-->');?></a>

        <a class="main-menu__link <?php if(is_page('faq') || is_singular( 'faq' )) echo 'is-active';?>" href="/faq"><?php echo __('<!--:ru-->Частые вопросы<!--:--><!--:ua-->Часті питання<!--:-->');?></a>

        <a class="main-menu__link <?php if(is_page('contacts')) echo 'is-active';?>" href="/contacts"><?php echo __('<!--:ru-->Контакты<!--:--><!--:ua-->Контакти<!--:-->');?></a>
        <!-- <a class="main-menu__link <?php if(is_page('faq')) echo 'is-active';?>" href="/faq">Часті запитання</a> -->
      </nav>

      <div class="header__right">
        <form action="" class="global-search">
          <input class="global-search__input" name="global_search" placeholder="<?php echo __('<!--:ru-->Поиск<!--:--><!--:ua-->Пошук<!--:-->');?>" type="text">
          <i class="global-search__icon icon icon-search"></i>
        </form>

        <div class="lang">
        

          <div class="lang__item">
            <?php 
            
            qtranxf_generateLanguageSelectCode('both');
            ?>

           <!--  <span><?php echo __('[:ua]Українською[:][:ru]По-русски[:]');?></span>
            <i class="icon icon-chevron-down"></i> -->
          </div>
          
         <!--  <ul class="lang__list">
            <li class="lang__item">
              <span>Українською</span>
            </li>
            <li class="lang__item">
              <span>По-русски</span>
            </li>
          </ul> -->
        </div>
      </div>
    </div>

    <div class="header__menu-btn visible-sm">
      <button class="hamburger" type="button"><span></span></button>
    </div>

  </div>
</header>
<!-- END header -->
<!-- BEGIN map -->
        <section class="section map" style="display:none">
          <div class="section-header">
            <h3 class="h4 uppercase spacing-100">Где купить</h3>
          </div>
          <div class="map__container">
            <div class="map-select">
              <button class="map-select__current" type="button"><svg class="icon icon-tag-o">
                <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-tag-o"></use>
              </svg>
              <svg class="icon icon-tag">
                <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-tag"></use>
              </svg>
              <span>Киев</span></button>
              <ul class="map-select__list">
                <li class="map-select__item" data-value='{"lat":200,"lang":100}'><svg class="icon icon-tag">
                    <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-tag"></use>
                  </svg> Киев
                </li>
                <li class="map-select__item" data-value='{"lat":200,"lang":100}'><svg class="icon icon-tag">
                    <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-tag"></use>
                  </svg> Одесса
                </li>
                <li class="map-select__item" data-value='{"lat":200,"lang":100}'><svg class="icon icon-tag">
                  <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-tag"></use>
                </svg> Львов
                </li>
                <li class="map-select__item" data-value='{"lat":200,"lang":100}'><svg class="icon icon-tag">
                  <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-tag"></use>
                </svg> Харьков
                </li>
              </ul>
            </div>
            <div id="map"></div>
          </div>
        </section>
        <!-- END map -->
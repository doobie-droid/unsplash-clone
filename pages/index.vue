<template>
  <div>
    <div class="index-backdrop">
      <form
        method="GET"
        action="#"
        role="search"
        aria-label="Find images by type on Unsplash Clone"
        class="index-search__form"
      >
        <button type="submit" title="Search Unsplash Clone">
          <svg
            fill="currentcolor"
            height="24px"
            width="24px"
            version="1.1"
            aria-hidden="false"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 490.4 490.4"
            xml:space="preserve"
          >
            <g>
              <path
                d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
		s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
		 M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"
              />
            </g>
          </svg>
        </button>
        <div role="combobox" class="index-search__box">
          <input
            type="search"
            autocomplete="off"
            aria-autocomplete="list"
            style="-webkit-appearance: none"
            placeholder="Search for photo"
            title="Search Unsplash Clone"
            autocapitalize="none"
            spellcheck="false"
            required="true"
            name="keywordForSearch"
            aria-controls="search-result-header"
            value=""
            class="index-search__input"
          />
          <div
            id="index-search__header"
            class="index-search__header"
            role="presentation"
          >
            Search Results for "Search Item"
          </div>
        </div>
      </form>
    </div>
    <div class="index-body">Body</div>
  </div>
</template>
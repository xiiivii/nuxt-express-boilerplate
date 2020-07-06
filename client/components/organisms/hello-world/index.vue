<template>
    <main :class="b()">
        <h1 :class="b('heading')">
            Hello, World!
        </h1>

        <pre :class="b('debug')">
windowSizeLazy      : {{ windowSizeLazy }}
windowSize          : {{ windowSize }}
scrollTop           : {{ getScrollTop() }}
scrollFreeze        : {{ getScrollFreezeState() }}</pre>

        <ga-button :class="b('button')" @click="onToggleFreezeClick()">
            toggle scroll freeze
        </ga-button>

        <ga-button :class="b('button')" @click="onPingClick()">
            ping? {{ pingResponse }}
        </ga-button>

        <p>
            {{ 'lorem ipsum '.repeat(999) }}
        </p>
    </main>
</template>

<script src="./scripts.js" />

<style src="./styles.scss" lang="scss" />

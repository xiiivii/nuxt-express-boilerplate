<template>
    <form :class="b()">
        <ga-input
            v-model="search"

            :class="b('input')"

            placeholder="поиск"
        />
        <ga-button type="submit">
            Найти
        </ga-button>
    </form>
</template>

<script src="./scripts.js" />

<style src="./styles.scss" lang="scss" />

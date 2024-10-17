<script lang="ts">

type DataRefRenderListOptions = {
  showIsFamous: boolean | null
  albums: { name: string, artist: string, isFamous: boolean }[]
};

export default {
  name: 'RenderListOptions',
  data(): DataRefRenderListOptions {
    return {
      showIsFamous: true,
      albums: [
        {
          name: 'Abbey Road',
          artist: 'The Beatles',
          isFamous: true,
        },
        {
          name: 'Asep Ujang',
          artist: 'Memeku',
          isFamous: false,
        },
        {
          name: 'Slash',
          artist: 'gunsnroses',
          isFamous: true,
        },
        {
          name: 'Denny Caknan',
          artist: 'DC Music',
          isFamous: true,
        },
      ],
    };
  },

  computed: {
    filteredAlbums() {
      if (typeof this.showIsFamous === 'boolean') {
        return this.albums.filter((album) => album.isFamous === this.showIsFamous);
      }
      return this.albums;
    },
  },

  methods: {
    toggleAlbumFamous() {
      this.showIsFamous = !this.showIsFamous;
    },
    showAllAlbum() {
      this.showIsFamous = null;
    },

  },

  mounted() {
    console.log('albumsRef', this.$refs.albumsRef);
  },
};
</script>

<template>
  <div class="mt-6">
    <div class="flex gap-6">
      <button
        type="button"
        @click="toggleAlbumFamous"
        class="ring-1 ring-neutral-400 rounded-sm px-4 py-2"
      >
        {{`Show ${showIsFamous ? 'Not' : ''} Famous Album`}}
      </button>
      <button
        type="button"
        @click="showAllAlbum"
        class="bg-sky-300 rounded-sm px-4 py-2"
      >
        Show All
      </button>
    </div>

    <ol class="mt-4">
      <li
        ref="albumsRef"
        v-for="(album, index) in filteredAlbums"
        :key="album.name"
        :class="{
          'bg-red-400/50': !album.isFamous,
          'bg-green-400/50': album.isFamous,
        }"
      >
        {{index + 1}}. {{album.name}} - {{album.artist}}
        <span>
          ({{album.isFamous ? 'Famous' : 'Not Famous'}})
        </span>
      </li>
    </ol>
  </div>
</template>

<style scoped>
/* component style */
</style>

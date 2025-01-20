<template>
  <v-container>
    <v-row>
      <v-col
        class="px-md-4"
        cols="12"
        xl="4"
      >
        <div class="text-md-h4 font-weight-bold mb-2 text-h5">{{ feature.title }}</div>

        <div class="text-body-1 mb-4 text-medium-emphasis">
          {{ feature.description }}
        </div>

        <v-expansion-panels
          collapse-icon="mdi-minus"
          expand-icon="mdi-plus"
          flat
          multiple
          static
          variant="accordion"
        >
          <template
            v-for="(item, i) in feature.items"
            :key="i"
          >
            <v-divider />

            <v-expansion-panel class="py-2">
              <template #title>
                {{ item.category }}
              </template>

              <template #text>
                <v-list
                  density="compact"
                  :items="item.list"
                  :lines="false"
                  slim
                >
                  <template #item="{ props: itemProps }">
                    <v-list-item
                      class="px-0"
                      prepend-icon="mdi-circle-small"
                      v-bind="itemProps"
                    >
                      <template #prepend>
                        <v-icon class="me-n4" />
                      </template>

                      <template #title>
                        <span class="text-body-2">{{ itemProps.title }}</span>
                      </template>
                    </v-list-item>
                  </template>
                </v-list>
              </template>
            </v-expansion-panel>
          </template>
        </v-expansion-panels>
      </v-col>

      <v-col
        cols="12"
        xl="8"
      >
        <div class="d-flex flex-column ga-6">
          <v-item-group
            v-model="selectedImage"
            class="d-flex ga-4 align-center mt-4"
            mandatory="force"
          >
            <v-item
              v-for="(image, n) in feature?.images"
              :key="n"
              :value="image"
            >
              <template #default="{ toggle, isSelected }">
                <v-card
                  class="flex-1-1 cursor-pointer border-md"
                  :class="isSelected ? 'border-primary border-opacity-50' : 'border-opacity-0'"
                  height="90"
                  :image="image"
                  rounded="lg"
                  @click="toggle"
                />
              </template>
            </v-item>
          </v-item-group>
          <v-img
            v-if="type === 'mobile'"
            max-height="50svh"
            rounded="lg"
            :src="selectedImage"
          />
          <v-img
            v-else
            max-height="75svh"
            rounded="lg"
            :src="selectedImage"
          />
        </div>
      </v-col>
    </v-row>
    <v-divider class="my-12" />
  </v-container>
</template>

<script setup>
  defineProps({
    feature: Object,
    type: String,
  });

  const selectedImage = ref();
</script>
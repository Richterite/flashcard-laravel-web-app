

<script setup lang="ts">
import DropZone from '@/components/DropZone.vue';
import FilePreview from '@/components/FilePreview.vue';
import { useFileListStores } from '@/stores/file-stores';
import { storeToRefs } from 'pinia';


const fileStore = useFileListStores()
const {files} = storeToRefs(fileStore)
function onInputChange(e: Event){
    const target = e.target as HTMLInputElement;
    if (target.files){
        fileStore.addFiles(target.files)
    }
    target.value = '';
}


const {fileFormat = ''} = defineProps<{
    fileFormat?: string
}>();


</script>

<template>
    <div id="drop-zone">
        <DropZone class="drop-area rounded-lg" @files-dropped="fileStore.addFiles" #default="{ dropZoneActive}">
            <label for="file-input">
                <span v-if="dropZoneActive">
                    <span class="text-xl">Drop it Here</span>
                    <span class="text-lg">to add</span>
                </span>
                <span v-else>
                    <span class="text-xl">Drag Your Files Here</span>
                    <span class="text-lg">
                        or <strong><em>click here</em></strong> to select files
                    </span>
                </span>
                <input type="file" id="file-input" :accept="fileFormat" @change="onInputChange"/>
            </label>
            <ul v-show="files.length" class="flex flex-wrap gap-3 mt-5">
                <FilePreview v-for="file of files" :file="file" :key="file.id" tag="li" @remove="fileStore.removeFile"/>
            </ul>
        </DropZone>
    </div>
</template>


<style scoped lang="css">

.drop-area {
	width: 100%;
	margin: 0 auto;
	padding: 50px;
	background: #ffffff55;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	transition: .2s ease;


}

drop-area > &[data-active=true] {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		background: #ffffffcc;
}

label {
	font-size: 36px;
	cursor: pointer;
	display: block;

}


input[type=file]:not(:focus-visible) {
		position: absolute !important;
		width: 1px !important;
		height: 1px !important;
		padding: 0 !important;
		margin: -1px !important;
		overflow: hidden !important;
		clip: rect(0, 0, 0, 0) !important;
		white-space: nowrap !important;
		border: 0 !important;
}


label > span {
		display: block;
}
</style>

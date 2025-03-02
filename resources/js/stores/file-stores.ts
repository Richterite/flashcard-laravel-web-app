import { UploadableFile, UploadableFileInterface } from "@/compositions/file-list";
import { defineStore } from "pinia";
import { ref } from "vue";

interface FileListState {
    files: UploadableFileInterface[],

}

interface FileListGetters {
    getFileOnly: () => File | FileList
}


interface FileListActions {
    addFile: (newFile: FileList | File) => void
    fileExisted: (id: string) => boolean
    removeFile: (file: UploadableFileInterface) => void
}


export const useFileListStores = defineStore('file-list', () => {
    const files = ref<UploadableFileInterface[]>([]);

    function addFiles(newFiles: FileList) {
        let newUploadableFiles = [...newFiles]
            .map((file) => new UploadableFile(file))
            .filter((file) => !fileExisted(file.id))
        files.value = files.value.concat(newUploadableFiles)
    }

    function fileExisted(otherId: string) {
        return files.value.some(({ id }) => id === otherId)
    }

    function findById(id: string) {
        return files.value.find((file) => file.id === id)
    }


    function removeFile(file: UploadableFileInterface) {
        const idx = files.value.indexOf(file)

        if (idx > -1) { files.value.splice(idx, 1) }
    }

    function $reset() {
        files.value = []
    }

    function getFileOnly(id?: string) {
        if (id) { return findById(id)?.file }
        return files.value.map((file) => file.file)
    }


    return { files, addFiles, removeFile, $reset, getFileOnly }
})
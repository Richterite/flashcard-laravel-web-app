import { ref } from "vue";


export default function useFileList() {
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


    function removeFile(file: UploadableFileInterface) {
        const idx = files.value.indexOf(file)

        if (idx > -1) { files.value.splice(idx, 1) }
    }


    return { files, addFiles, removeFile }
}


export interface UploadableFileInterface {
    file: File,
    id: string,
    url: ReturnType<typeof URL.createObjectURL>
    status?: 'idle' | 'uploading' | 'uploaded' | 'error' | null,
}

export class UploadableFile implements UploadableFileInterface {
    file: File;
    id: string;
    url: string;
    status?: "idle" | "uploading" | "uploaded" | "error" | null | undefined;
    constructor(file: File) {
        this.file = file;
        this.url = URL.createObjectURL(file)
        this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`
        this.status = null;

    }
}
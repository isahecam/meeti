import { UTApi } from "uploadthing/server"

const utApi = new UTApi()

export const deleteUTFiles = async (files: string) => {
  try {
    const keyFile = files.split("/f/")[1]
    await utApi.deleteFiles(keyFile)
  } catch (error) {
    console.error(error)
  }
}

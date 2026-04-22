"use client"

import Image from "next/image"
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { toast } from "sonner"
import { twMerge } from "tailwind-merge"

import { CommunityType } from "~/features/communities/schemas/community-schema"
import { Field, FieldError, FieldLabel } from "~/shared/components/ui/field"
import { Spinner } from "~/shared/components/ui/spinner"
import { UploadDropzone } from "~/shared/utils/uploadthing"

export function UploadImage() {
  const {
    formState: { errors },
    setValue,
  } = useFormContext<CommunityType>()
  const [uploadedImage, setUploadedImage] = useState("")

  return (
    <>
      <UploadDropzone
        endpoint="imageUploader"
        className="ut-button:h-9 ut-button:cursor-pointer! ut-button:bg-primary ut-button:text-sm ut-button:ring-0 hover:ut-button:bg-primary/80"
        appearance={{
          button:
            "ut-ready:bg-primary w-auto px-4 ut-uploading:cursor-not-allowed after:bg-secondary-400 after:text-white",
          label: "text-primary hover:text-primary/80 text-sm",
          allowedContent: "text-xs",
        }}
        content={{
          button({ isUploading }) {
            return isUploading ? (
              <>
                <Spinner data-icon="inline-start" className="mr-2" />
                Subiendo imagen...
              </>
            ) : (
              "Selecciona una imagen"
            )
          },
          label: "Elige un archivo o arrastralo y suéltalo aquí",
          allowedContent: "Max. 1MB",
        }}
        config={{
          cn: twMerge,
          mode: "auto",
        }}
        onClientUploadComplete={(res) => {
          toast.success("Imagen subida correctamente")
          setUploadedImage(res[0].ufsUrl)
          setValue("image", res[0].ufsUrl, { shouldValidate: true })
        }}
      />

      {errors.image && <FieldError errors={[errors.image]} />}

      {uploadedImage && (
        <Field>
          <Image
            priority
            src={uploadedImage}
            alt="Portada de la comunidad"
            width={300}
            height={300}
            className="h-auto w-full"
          />
          <FieldLabel>Imagen de la comunidad</FieldLabel>
        </Field>
      )}
    </>
  )
}

import * as Dialog from "@radix-ui/react-alert-dialog"
import {IoMdClose} from "react-icons/io"

interface ModalProps {
    isOpen : boolean
    onChange : (open: boolean)=>void
    title: string
    description: string;
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({isOpen,onChange,title,description,children}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
        <Dialog.Portal>
            <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0"/>  {/* Overlay the content with background. */}
            <Dialog.Content className="fixed drop-shadow-md border border-neutral-500 top-[50%] left-[50%] max-w-full h-full md:h-full md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-7">
                <Dialog.Title className="text-xl text-center font-bold mb-4">{title}</Dialog.Title>
                <Dialog.Description className="text-sm text-center">{description}</Dialog.Description>
                <div>{children}</div>
                <Dialog.Cancel asChild>
                    <button className="text-neutral-400 hover:text-white absolute top-[10px] right-6 inline-flex h-[25px] w-[25px] justify-center items-center transition">
                        <IoMdClose/>
                    </button>
                </Dialog.Cancel>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
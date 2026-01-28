import { X } from 'lucide-react';

export const TaskItem = () => {
    return (
        <li className="">
            <div className="flex border-2 justify-between m-3 p-3 border-accent rounded items-center bg-success/30">
              <div className="flex items-center items-center">
                    <div className="rounded-full border-1 p-1 rounded-md text-accent text-primary bg-accent/20 ">
                        1
                    </div>
                    <div className="pl-2">
                        finir mon app de Todo
                    </div>
              </div>
                <div className="bg-red-400">
                    <X />
                </div>
            </div>
        </li>
    )
}
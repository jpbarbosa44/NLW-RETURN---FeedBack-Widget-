import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg';
import IdeaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    }, 
    IDEA:{
        title: 'Ideia',
        image:{
            source: IdeaImageUrl,
            alt: 'imagem de uma lampada'
        },
    },
    OTHER:{
        title: 'Outros',
        image: {
            source:thoughtImageUrl,
            alt: 'imagem de um balão de pensamento' 
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    function handleRestartFeedback(){
        setFeedbackType(null);
    }
    
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           
            {!feedbackType  ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep 
                    feedbackType={feedbackType} 
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}

            <footer className="text-xs text-neutral-400">
                By <a className="underline underline-offset-2" href="https://www.medsystem.com.br/">Medsystem S/V</a>
            </footer>
        </div>
    );
}
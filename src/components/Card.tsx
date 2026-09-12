import { useState } from 'react';
import type { Itechnology } from '../Types/types';
import { Bounce, toast, ToastContainer } from 'react-toastify';

interface CardProps {
    technology: Itechnology[];
}

const Card = ({ technology }: CardProps) => {
    const [stack, setStack] = useState<Itechnology[]>([]);

    const isInStack = (id: Itechnology['id']) => stack.filter((t) => t.id === id).length > 0;

    const handleAdd = (tech: Itechnology) => {
        setStack((prev) =>
            prev.some((t) => t.id === tech.id) ? prev : [...prev, tech]
        );
        toast(`${tech.name} added to stack.`)
    };

    const handleRemove = (tech: Itechnology) => {
        setStack((prev) => prev.filter((t) => t.id !== tech.id));
        toast.warn(`${tech.name} removed from the stack!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    };

    const handleRemoveAll = () => {
        setStack([]);
    };

    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 container mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                {technology.map((technologi: Itechnology) => {
                    const added = isInStack(technologi.id);
                    return (
                        <div
                            key={technologi.id}
                            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                        >

                            <div className="flex items-center justify-between">
                                <img
                                    src={technologi.icon}
                                    alt={technologi.name}
                                    className="h-12 w-12 object-contain"
                                />
                                <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm text-blue-500">
                                    {technologi.badge}
                                </span>
                            </div>

                            <h2 className="mt-6 text-2xl font-bold text-gray-900">
                                {technologi.name}
                            </h2>
                            <p className="mt-3 min-h-[72px] text-base leading-6 text-slate-400">
                                {technologi.description}
                            </p>
                            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                                <span className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                    {technologi.category}
                                </span>
                                <span className="text-sm text-slate-500">
                                    {technologi.difficulty}
                                </span>
                                <span className="flex items-center gap-1 text-sm text-slate-600">
                                    <span className="text-yellow-400">★</span>
                                    {technologi.rating}
                                </span>
                            </div>

                            <button
                                onClick={() => handleAdd(technologi)}
                                className={`mt-5 w-full rounded-[10px] py-3 text-white transition-colors ${added ? 'bg-slate-300' : 'bg-[#0b1020] hover:bg-slate-800'
                                    }`}
                            >
                                {added ? 'Added to Stack' : 'Add to Stack'}
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 h-fit">
                <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
                <p className="mt-1 text-sm text-slate-400">
                    {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
                </p>

                {stack.length === 0 ? (
                    <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-300">
                        Your stack is empty
                    </div>
                ) : (
                    <>
                        <div className="mt-4 space-y-2">
                            {stack.map((tech) => (
                                <div
                                    key={tech.id}
                                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2"
                                >
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="h-6 w-6 object-contain"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">
                                                {tech.name}
                                            </p>
                                            <p className="text-xs text-slate-400">
                                                {tech.category}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRemove(tech)}
                                        className="text-slate-400"
                                        aria-label={`Remove ${tech.name}`}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleRemoveAll}
                            className="mt-4 w-full rounded-lg border border-red-200 py-2 text-sm font-medium text-red-500"
                        >
                            Remove All
                        </button>

                    </>
                )}
            </div>
        </div>
    );
};

export default Card;
import type { Itechnology } from '../Types/types';

interface CardProps {
    technology: Itechnology[];
}

const Card = ({ technology }: CardProps) => {
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 container mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                {technology.map((technologi: Itechnology) => (
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

                    
                        <button className="mt-5 w-full rounded-[10px] bg-[#0b1020] py-3 text-white">
                            Add to Stack
                        </button>
                    </div>
                ))}
            </div>

         
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-fit">
                <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
                <p className="mt-1 text-sm text-slate-400">No technologies selected yet.</p>
                <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-300">
                    Your stack is empty
                </div>
            </div>
        </div>
    );
};

export default Card;
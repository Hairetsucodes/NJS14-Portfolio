import Image from 'next/image';

const skillsData = [{ name: 'JavaScript', icon: '/icons/javascript.svg' }, {
    name: 'TypeScript',
    icon: '/icons/typescript.svg'
}, { name: 'Python', icon: '/icons/python.svg' }, { name: 'React', icon: '/icons/react.svg' }, {
    name: 'React Native',
    icon: '/icons/react.svg'
}, { name: 'NextJS 14+', icon: '/icons/next.svg' }, { name: 'Next-Auth', icon: '/icons/next.svg' }, {
    name: 'Prisma ORM',
    icon: '/icons/prisma.svg'
}, { name: 'Node.js', icon: '/icons/node.svg' }, {
    name: 'Django',
    icon: '/icons/django.svg'
}, { name: 'FastAPI', icon: '/icons/fastapi.svg' }, { name: 'MongoDB', icon: '/icons/mongo.svg' }, {
    name: 'MySQL',
    icon: '/icons/mysql.svg'
}, { name: 'REDIS', icon: '/icons/redis.svg' }, { name: 'TailwindCSS/CSS', icon: '/icons/tailwind.svg' },
{ name: 'Others', icon: '/icons/misc.svg' }
];

const ExperienceData = [{ name: 'Backend APIs', icon: '/icons/flutter.svg' }, {
    name: 'Data Optimizing/Clean Up',
    icon: '/icons/flutter.svg'
}, { name: 'Data Sanitation', icon: '/icons/flutter.svg' }, {
    name: 'LLM Function Calling',
    icon: '/icons/flutter.svg'
}, { name: 'LLM Integration', icon: '/icons/flutter.svg' }, {
    name: 'Middleware',
    icon: '/icons/flutter.svg'
}, { name: 'ML / AI Principles', icon: '/icons/flutter.svg' }, {
    name: 'OAuth Integration',
    icon: '/icons/flutter.svg'
}, { name: 'REST API', icon: '/icons/flutter.svg' }, {
    name: 'SSE and WebSockets',
    icon: '/icons/flutter.svg'
}, { name: 'Stripe Payment', icon: '/icons/flutter.svg' }, {
    name: 'UX/UI Frontend',
    icon: '/icons/flutter.svg'
}, { name: 'Vector Storage', icon: '/icons/flutter.svg' }, { name: 'Web Security', icon: '/icons/flutter.svg' },
{
    name: 'CORS',
    icon: '/icons/flutter.svg'
}, { name: 'JSON Web Tokens', icon: '/icons/flutter.svg' },];

export function LanguagesSkills() {
    return (
        <div>
            <div className={'h-full'}>
                <h2 className="text-xl p-4 text-center font-semibold my-4">Languages & Frameworks</h2>
                <div className="h-full flex flex-col">
                    <ul className="grid p-4 grid-cols-2 gap-4">
                        {skillsData.map((skill, index) => (
                            <li key={index} className="flex">
                                <Image src={skill.icon} alt={skill.name} width={30} height={30} />
                                <span className="ml-2 ">{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function ExperienceSkills() {
    return (
        <div className={'h-full flex-grow pt-1'}>
            <h2 className="text-xl p-4 text-center font-semibold my-4">Experience</h2>
            <div className="h-full flex flex-col">
                <ul className="grid p-4 grid-cols-2 gap-4">
                    {ExperienceData.map((exp, index) => (
                        <li key={index} className="flex ">
                            <span className="ml-2">{exp.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

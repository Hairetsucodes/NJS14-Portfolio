'use client'
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "@/components/ui/Code";
import { motion } from 'framer-motion'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TbArrowBackUp } from "react-icons/tb";


interface BlogPostProps {
    postData: {
        id: number;
        title: string;
        img: string;
        category: string;
        content: string;
        published: boolean;
        slug: string;
        date: Date;
        userId: string | null;
    } | null,
}
export default function BlogPost({ postData }: BlogPostProps) {
    const options = { code: CodeBlock }
    if (postData == null) {
        return null
    }

    return (
        <div className="w-full justify-center flex flex-grow pt-8">
            <div className="px-8 p-4 bg-card rounded-lg border">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className=""
                >
                    <div className={'w-full flex p-4'}>
                        <Link className={''} href={"/blog"}>
                            <Button variant="outline" className="">
                                <span className={'pr-2'}><TbArrowBackUp /></span> Return to Main
                            </Button>
                        </Link>
                    </div>
                    <div className={' m-4 p-2 border-b'}>
                        <h1 className="text-4xl font-bold">{postData.title}</h1>
                    </div>
                    <div className="mb-8 flex justify-center items-center">
                        <Image
                            alt=""
                            src={postData.img}
                            height={400}
                            width={800}
                            className="rounded-lg border shadow-md"
                        />
                    </div>
                    <div>
                        <Markdown
                            components={options}
                            remarkPlugins={[remarkGfm]}
                            className='min-w-full prose prose-invert'
                        >
                            {postData.content}
                        </Markdown>
                    </div>

                </motion.div>
            </div>
        </div>

    )
}
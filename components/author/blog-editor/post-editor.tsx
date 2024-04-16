'use client'
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useEffect, useState} from "react";
import CodeMirror from "@uiw/react-codemirror"
import {markdown} from '@codemirror/lang-markdown';
import remarkGfm from 'remark-gfm';
import {EditorView} from "@codemirror/view";
import {LightEditorTheme} from "@/components/theme/editor-theme";
import {NewBlogSchema} from "@/schemas";
import {CodeBlock} from "@/components/ui/Code";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import Markdown from "react-markdown";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {useParams} from "next/navigation";
import {editPost} from "@/data/blog";
import {getPost} from "@/data/blog";
import {toast} from "sonner";
import { useRouter } from 'next/navigation';

export default function BlogEditor() {
    const [postData, setPostData] = useState<any>([]);
    const params = useParams();
    const postSlug = params.postSlug as string;
    const [content, setContent] = useState('');
    const [isPreview, setIsPreview] = useState(false);
    const form = useForm<z.infer<typeof NewBlogSchema>>({
        resolver: zodResolver(NewBlogSchema),
    })
    const router = useRouter()
    async function fetchPostData() {
        type data = {
            id: string;
            title: string;
            content: string;
            img: string;
            category: string;
        }
        const data = await getPost(postSlug) as unknown as data
        setPostData(data)
        setContent(data.content);

        form.reset({
            title: data.title,
            img: data.img,
            category: data.category,
            content: data.content,
            tags: []
        });
    }

    useEffect(() => {
        fetchPostData().then(() => {});
        // eslint-disable-next-line
    }, []);

    async function onSubmit(values: z.infer<typeof NewBlogSchema>) {
        await editPost(postData.id, values.title, values.content, values.category, values.img);
        toast("Blog Edited")
        form.reset()
        router.push(`/blog/${postData.slug}`);
    }

    const options = {code: CodeBlock}
    return (
        <div className="min-h-screen flex flex-col items-center py-10">
            <div className="bg-card border w-full max-w-4xl p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Post Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="The greatest story never told..." {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="img"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Post Image URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="google.com/img.png" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="category"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Tech">Tech</SelectItem>
                                            <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                                            <SelectItem value="Travel">Travel</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <div className={'min-h-80 h-full'}>
                            <FormField
                                control={form.control}
                                name="content"
                                render={() => (
                                    <FormItem>
                                        <FormLabel>Post Content
                                            (Markdown)</FormLabel>
                                        <CodeMirror
                                            theme={LightEditorTheme}
                                            value={content}
                                            className="h-full"
                                            height="100%"
                                            basicSetup={true}
                                            extensions={[markdown(), EditorView.lineWrapping]}
                                            onChange={(value) => {
                                                setContent(value)
                                                form.setValue('content', value)
                                            }}
                                        />
                                        {isPreview && (
                                            <div className="mb-4 ">
                                                <label htmlFor="postContent" className="block text-lg font-medium mb-2">Post
                                                    Content
                                                    Preview</label>
                                                <div className={'min-h-80'}>
                                                    <Markdown
                                                        components={options}
                                                        className='prose prose-invert min-w-full'
                                                        remarkPlugins={[remarkGfm]}>
                                                        {content}
                                                    </Markdown>
                                                </div>
                                            </div>
                                        )}
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className={"w-full flex"}>
                            <Button type="button" className="w-full m-4" onClick={() => {
                                setIsPreview(!isPreview)
                            }}>Toggle Post Preview</Button>
                            <Button type="submit" className="w-full m-4">Submit Edited Post</Button>
                        </div>
                    </form>
                </Form>
                <div className="mt-6">
                    <Link href={"/dashboard"} className="text-primary hover:underline">Go back to dashboard</Link>
                </div>
            </div>
        </div>
    )
}
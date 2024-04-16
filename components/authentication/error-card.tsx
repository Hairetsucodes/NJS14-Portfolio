import {CardDescription, Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {ExclamationTriangleIcon} from "@radix-ui/react-icons";
import {Button} from '@/components/ui/button'
import {TbArrowBackUp} from "react-icons/tb";

export const ErrorCard = () => {

    return (
        <Card className="w-[400px] shadow-md text-center">
            <CardHeader>
                <CardTitle>Error</CardTitle>
                <CardDescription>Something went wrong</CardDescription>
            </CardHeader>
            <CardContent>
                <ExclamationTriangleIcon className={'w-full text-destructive h-10'}/>
            </CardContent>
            <CardFooter>
                <div className={'w-full'}>
                    <Link href={'/login'}>
                        <Button variant={'outline'} className=''><TbArrowBackUp className={'pr-2 h-5 w-5'}/>Back to
                            Login</Button>
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}
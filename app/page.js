import { connectDB } from '@/util/database';
import { MongoClient } from 'mongodb';

export default async function Home() {
    // const client = await connectDB;
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray(); // post 컬렉션의 모든 document를 꺼내서(find), 어레이로 만들어주세요.
    console.log(result);
    // 주의: DB 입출력 코드는 server component 안에서만 쓰자
    // client component에서 쓰면, 모든 유저 브라우저에 전달되기 때문 > 민감한 코드 주의하기 위해
    return <div>안녕</div>;
}

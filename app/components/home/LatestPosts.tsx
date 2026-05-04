import Image from 'next/image';
import Link from 'next/link';
import { User, MessageCircle, ArrowRight } from 'lucide-react'; // Using Lucide for the icons

export default function LatestPosts(){
  const posts = [
    {
      id: 1,
      date: { day: '28', month: 'APR' },
      author: 'Admin',
      comments: '05',
      title: 'Top 10 AI Intelligence Agency Provider',
      image: '/images/latest-post/l1.jpg',
      href: '#'
    },
    {
      id: 2,
      date: { day: '28', month: 'APR' },
      author: 'Admin',
      comments: '05',
      title: 'The Future of AI Intelligence Agencies',
      image: '/images/latest-post/l2.jpg',
      href: '#'
    },
    {
      id: 3,
      date: { day: '28', month: 'APR' },
      author: 'Admin',
      comments: '05',
      title: 'How AI is Changing the Business World',
      image: '/images/latest-post/l3.jpg',
      href: '#'
    }
  ];

  return (
    <section className="relative w-full pt-[120px] pb-[80px] bg-gradient-to-b from-[#A0D7FE] to-[#F6FBFF]">
      <div className="container mx-auto px-[15px] max-w-[1320px]">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-[60px]">
          <span className="inline-flex items-center text-[13px] font-semibold text-[#317EFE] uppercase mb-[10px]">
            LATEST BLOG
          </span>
          <h2 className="text-[57px] leading-[1.2] font-medium text-[#14203A] max-w-[700px]">
          Recent Articles And News
          From Our Blog
          </h2>
        </div>

        {/* Posts Grid */}
        <div className="flex flex-wrap -mx-[15px]">
          {posts.map((post) => (
            <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 px-[15px] mb-[30px]">
              <div className="bg-white rounded-[20px] overflow-hidden group">
                {/* Image Wrapper */}
                <div className="relative aspect-[370/250] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-[23px] right-[25px] flex flex-col items-center justify-center bg-[#317EFE] text-white w-[60px] h-[75px] rounded-[20px] leading-none">
                    <span className="text-[20px] font-medium">{post.date.day}</span>
                    <span className="text-[14px] font-medium uppercase mt-1">{post.date.month}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-[25px] px-[20px] pb-[20px]">
                  {/* Meta Info */}
                  <div className="flex items-center gap-[20px] mb-[12px]">
                    <div className="flex items-center gap-[6px] text-[#335371] text-[14px]">
                      <User className="w-[14px] h-[14px] text-[#317EFE]" />
                      <span>By {post.author}</span>
                    </div>
                    <div className="flex items-center gap-[6px] text-[#335371] text-[14px]">
                      <MessageCircle className="w-[14px] h-[14px] text-[#317EFE]" />
                      <span>Comments ({post.comments})</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] font-medium text-[#14203A] leading-[1.3] mb-[15px] hover:text-[#317EFE] transition-colors">
                    <Link href={post.href}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Read More */}
                  <Link 
                    href={post.href}
                    className="inline-flex items-center gap-[8px] text-[#14203A] text-[17px] font-semibold hover:text-[#317EFE] transition-colors group/btn"
                  >
                    Read More
                    <ArrowRight className="w-[18px] h-[18px] transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
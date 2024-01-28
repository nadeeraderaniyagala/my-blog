import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  createdOn: string;
  updatedOn?: string;
  author: Author;
};

function renderDate(updatedOn: string, createdOn: string) {
  return (
      <div>
        {updatedOn ? 'Updated' : 'Created'} on&nbsp;
        <DateFormatter dateString={updatedOn || createdOn}/>
      </div>
  );
}

const PostHeader = ({title, coverImage, createdOn, updatedOn, author}: Props) => {

  const date = renderDate(updatedOn, createdOn)
  return (
      <>
        <PostTitle>{title}</PostTitle>
        <div className="hidden md:flex md:mb-12 justify-between">
          <div><Avatar name={author.name} picture={author.picture}/></div>
          <div className="text-gray-400 text-sm">
            {date}
          </div>
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage}/>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="block md:hidden mb-6">
            <Avatar name={author.name} picture={author.picture}/>
          </div>
        </div>
      </>
  );
};

export default PostHeader;

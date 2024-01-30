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
      <>
        {updatedOn ? 'Updated' : 'Created'} on&nbsp;
        <DateFormatter dateString={updatedOn || createdOn}/>
      </>
  );
}

const PostHeader = ({title, coverImage, createdOn, updatedOn, author}: Props) => {

  const date = renderDate(updatedOn, createdOn)
  return (
      <>
        <PostTitle>{title}</PostTitle>
        <div className="hidden md:block md:mb-12">
          <div className="text-gray-400">
            {date}
          </div>
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage}/>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="block md:hidden mb-6">
            <div className="text-gray-400">
              {date}
            </div>
          </div>
        </div>
      </>
  );
};

export default PostHeader;

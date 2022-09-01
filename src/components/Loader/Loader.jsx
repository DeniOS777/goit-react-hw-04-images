import { ThreeDots } from 'react-loader-spinner';

export const Loader = ({ hasImages }) => {
  return (
    <ThreeDots
      height="50"
      width="50"
      radius="9"
      color="#4354B0"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        justifyContent: 'center',
        paddingTop: hasImages ? 'none' : '50px',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};

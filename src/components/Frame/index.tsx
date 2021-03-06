export type FrameProps = {};

const Frame: React.FC<FrameProps> = ({ children }): JSX.Element => {
  return (
    <>
      {/* ヘッダーを固定する */}
      <div className="sticky top-0 z-50">header部</div>
      {/* メインコンテンツ */}
      <div>{children}</div>
    </>
  );
};

export default Frame;

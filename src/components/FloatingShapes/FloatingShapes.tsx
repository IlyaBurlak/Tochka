interface FloatingShapesProps {
  count: number;
}

export const FloatingShapes = ({ count }: FloatingShapesProps) => {
  return (
    <div className='floating-shapes'>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className={`shape shape-${(i % 10) + 1}`} />
      ))}
    </div>
  );
};

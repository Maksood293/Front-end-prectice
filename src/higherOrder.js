function HigerOrder({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      {children}
    </div>
  );
}
export default HigerOrder;

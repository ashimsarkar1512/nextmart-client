import CreateCategoryModal from "./CreateCategoryModal";

const ManageCategories= () => {
            return (
                        <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold">Manage Categories</h1>
                        <CreateCategoryModal />
                      </div>
            );
};

export default ManageCategories;
import React from "react";
export default function ED(props){
    return(
        <div className="container-fluid">
            <div className="col-md-5 m-auto">
                <div className="mt-3">
                    <div className="card text-left">
                        <div className="card-body">
                            <form onSubmit={props.submited}>
                                <div className="form-group">
                                    <label>
                                        <b>13.</b>
                                        Graduation Degree
                                    </label> <br />
                                    <select name="degree" required className="form-control">
                                        <option>select one...</option>
                                        <option value="BSc">BSc</option>
                                        <option value="BA">BA</option>
                                        <option value="MA">MA</option>
                                        <option value="MSc">MSc</option>
                                        <option value="B.Tech">B.Tech</option>
                                        <option value="M.Tech">M.Tech</option>
                                        <option value="M.Com">M.Com</option>
                                        <option value="B.Com">B.Com</option>
                                        <option value="MBA">MBA</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <b>14.</b>
                                        Graduation CGPA / %
                                    </label>
                                    <input type="number" className="form-control" name="Gcgpa" autoComplete="off" required></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <b>15.</b>
                                        CGPA / % of 10th
                                    </label>
                                    <input type="number" className="form-control" name="tenth" autoComplete="off" required></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <b>16.</b>
                                         CGPA / % of 12th
                                    </label>
                                    <input type="number" className="form-control" name="intermidate" autoComplete="off"required></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <b>17.</b>
                                    </label>
                                    Upload your updated resume
                                    <input type="file" name="resume" className="form-control" required accept="pdf"></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <b>18.</b>
                                    </label>
                                    Upload your Profile
                                    <input type="file" name="profile" className="form-control" required accept="image/png, image/jpeg"></input>
                                </div>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
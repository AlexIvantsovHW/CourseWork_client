import { React } from 'react';

const Modal=(props)=>{
    return(
        <div class="m-4">
        <a href="#modalScrollableCenter" role="button" class="btn btn-primary" data-bs-toggle="modal">Expand</a>
        <div id="modalScrollableCenter" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal Alignment Demo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>
                      {props.text}
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">OK, Got it!</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Modal;
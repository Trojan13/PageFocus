<input type="hidden" name="v_507" id="v_507" />
<input type="hidden" name="v_512" id="v_512" />
<input type="hidden" name="v_513" id="v_513" />
<input type="hidden" name="v_514" id="v_514" />
<script language="javascript">

var defocusing_count = 0;  // number of page defocusing events
var refocusing_count = 0;  // number of page refocusing events
var last_duration = 0;  // duration between the last page defocusing and refocusing events
var duration_sum = 0;  // sum of all durations between page defocusing and refocusing events
var defocus_timestamp = 0;  // timestamp of last page defocusing event
var refocus_timestamp = 0;  // timestamp of last page refocusing event
var pagefocus = true;  // does the current page have the focus?
var defocus_count_input = document.getElementById("v_507");
var duration_sum_input = document.getElementById("v_512");
var refocus_count_input = document.getElementById("v_513");
var last_duration_input = document.getElementById("v_514");




function lost_focus() {  // page defocusing event detectedparseInt
    pagefocus = false;
    defocus_timestamp = new Date().getTime();
    defocusing_count++;  // count the number of defocusing events
    defocus_count_input.value = parseInt(defocusing_count);
}
function regained_focus() {  // page refocusing event detected
  if(!pagefocus) {
    pagefocus = true;
    refocus_timestamp = new Date().getTime();
    refocusing_count++;  // count the number of refocusing events
    refocus_count_input.value = parseInt(refocusing_count);
    last_duration = refocus_timestamp - defocus_timestamp; // calculate the duration between the last page defocusing and refocusing events
    duration_sum += last_duration; // sum durations between page defocusing and refocusing events
    last_duration_input.value = parseInt(last_duration/1000);
    duration_sum_input.value = parseInt(duration_sum/1000);
  }
}
function onfocusout() {  // workaround for Internet Explorer < version 11
  clearTimeout(timer);
  timer = setTimeout(lost_focus,100);
}
function onfocusin() {  // workaround for Internet Explorer < version 11
  clearTimeout(timer);
  regained_focus();
}



if("onfocusin" in document) {  // check for Internet Explorer version < 11
  var timer;
  document.onfocusin = onfocusin;
  document.onfocusout = onfocusout;
} else if("onpageshow" in window) {
  // use onpageshow and onpagehide for mobile Safari
  window.onfocus = window.onpageshow = regained_focus;
  window.onblur = window.onpagehide = lost_focus;
}
</script>

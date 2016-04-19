#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var window = new Gtk.Window();
window.set_title("FlowBox");
window.connect("destroy", Gtk.main_quit);

var flowbox = new Gtk.FlowBox();
window.add(flowbox);

for (var count = 1; count < 10; count++)
{
    var label = new Gtk.Label({label: "Label " + count});
    flowbox.insert(label, count);
}

window.show_all();

Gtk.main();
